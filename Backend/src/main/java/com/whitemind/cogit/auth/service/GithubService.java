package com.whitemind.cogit.auth.service;

import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

@Slf4j
@Service
public class GithubService {
    @Value("${GITHUB_CLIENT_ID}")
    private String clientId;

    @Value("${GITHUB_CLIENT_SECRET}")
    private String clientSecret;

    public void getGithubUserInfo(String accessToken) throws Exception {
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
        System.out.println(responseCode);
        String responseData = getResponse(conn, responseCode);
        System.out.println(responseData);
        conn.disconnect();
    }

    public String getAccessToken(String code) throws Exception {
        URL url = new URL("https://github.com/login/oauth/access_token");
        HttpURLConnection conn = (HttpURLConnection)  url.openConnection();
        conn.setDoInput(true);
        conn.setDoOutput(true);
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Accept", "application/json");
        conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36");
        // 이 부분에 client_id, client_secret, code를 넣어주자.
        // 여기서 사용한 secret 값은 사용 후 바로 삭제하였다.
        // 실제 서비스나 깃허브에 올릴 때 이 부분은 항상 주의하자.
        try (BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()))) {
            bw.write("client_id="+clientId+"&client_secret="+clientSecret+"&code=" + code);
            bw.flush();
        }

        int responseCode = conn.getResponseCode();

        String responseData = getResponse(conn, responseCode);
        JSONObject jObject = new JSONObject(responseData);

        String accessToken = jObject.getString("access_token");
        getGithubUserInfo(accessToken);
        conn.disconnect();

        return responseData;
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
