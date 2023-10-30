package com.whitemind.cogit.auth.service;

import com.whitemind.cogit.auth.dto.GitRefResponseDto;
import com.whitemind.cogit.code.dto.request.CodeRequest;
import com.whitemind.cogit.common.util.JwtService;
import com.whitemind.cogit.member.dto.UpdateMemberDto;
import com.whitemind.cogit.member.entity.Member;
import com.whitemind.cogit.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

@Slf4j
@RequiredArgsConstructor
@Service
public class GithubServiceImple implements GithubService {
    @Value("${GITHUB_CLIENT_ID}")
    private String clientId;

    @Value("${GITHUB_CLIENT_SECRET}")
    private String clientSecret;

    private final MemberRepository memberRepository;
    private final JwtService jwtService;
    /**
     * 유저 accessToken을 사용하여 유저 정보 반환
     * @param accessToken
     * @return
     * @throws IOException
     */
    public UpdateMemberDto getGithubUserInfo(String accessToken) throws IOException {
        log.info("getGithubUserInfo | 유저 정보 요청");
        URL url = new URL("https://api.github.com/user");
        HttpURLConnection conn = (HttpURLConnection)  url.openConnection();
        conn.setDoInput(true);
        conn.setDoOutput(true);
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Accept", "application/json");
        conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36");
        conn.setRequestProperty("Authorization","Bearer " + accessToken);

        int responseCode = conn.getResponseCode();
        String responseData = getResponse(conn, responseCode);
        JSONObject jObject = new JSONObject(responseData);

        UpdateMemberDto updateMemberDto = new UpdateMemberDto(jObject.getInt("id"), jObject.getString("html_url"), jObject.getString("login"), "", jObject.getString("avatar_url"), accessToken);

        conn.disconnect();
        return updateMemberDto;
    }

    /**
     * Github 인가 코드를 사용하여 유저 git AccessToken 발급
     * @param code
     * @return
     * @throws IOException
     */
    public String getAccessToken(String code) throws IOException {
        log.info("getAccessToken | Github AccessToken 요청");
        URL url = new URL("https://github.com/login/oauth/access_token");
        HttpURLConnection conn = (HttpURLConnection)  url.openConnection();
        conn.setDoInput(true);
        conn.setDoOutput(true);
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Accept", "application/json");
        conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36");

        try (BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()))) {
            bw.write("client_id="+clientId+"&client_secret="+clientSecret+"&code=" + code);
            bw.flush();
        }

        int responseCode = conn.getResponseCode();

        String responseData = getResponse(conn, responseCode);

        JSONObject jObject = new JSONObject(responseData);

        String accessToken = jObject.getString("access_token");
        conn.disconnect();

        return accessToken;
    }

    @Override
    public void uploadGitCode(CodeRequest code, HttpServletRequest request) throws Exception {
        Member member = memberRepository.findMembersByMemberId(jwtService.extractMemberIdFromAccessToken(request));
        System.out.println(member.getMemberName());
//         그 전에 레포가 있는지 알아야지?
        GitRefResponseDto gitRefResponseDto = getRef(member);
        System.out.println(gitRefResponseDto.getRefSha() + " " + gitRefResponseDto.getRef());
        // blob 생성
        // treeSha 생성
        // commitSha 생성
        // head 업데이트(푸시)
    }

    public GitRefResponseDto getRef(Member member) throws IOException {
        log.info("getRef | Github Ref 요청");
        URL url = new URL("https://api.github.com/repos/"+"hyuntall/taa" + "/git/refs/heads/main");
        HttpURLConnection conn = (HttpURLConnection)  url.openConnection();
        conn.setDoInput(true);
        conn.setDoOutput(true);
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Accept", "application/json");
        conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36");
        conn.setRequestProperty("Authorization","Bearer " + member.getMemberGitAccessToken());

        int responseCode = conn.getResponseCode();
        String responseData = getResponse(conn, responseCode);
        JSONObject jObject = new JSONObject(responseData);
        System.out.println(responseData);
        return new GitRefResponseDto(jObject.getString("ref"), jObject.getJSONObject("object").getString("sha"));
    }

    /**
     * 커밋한 내용 git repo에 push
     * @param ref
     * @param commitSHA
     */
    public void updateHead(String ref, String commitSHA) {

    }

    private String getResponse(HttpURLConnection conn, int responseCode) throws IOException {
        StringBuilder sb = new StringBuilder();
        if (responseCode == 200) {
            try (InputStream is = conn.getInputStream();
                 BufferedReader br = new BufferedReader(new InputStreamReader(is))) {
                for (String line = br.readLine(); line != null; line = br.readLine()) {
                    sb.append(line);
                }
            }
        }
        return sb.toString();
    }
}
