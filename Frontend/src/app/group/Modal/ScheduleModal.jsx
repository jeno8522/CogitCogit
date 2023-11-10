import React from 'react';
import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import Button from '@/components/Button';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

function ScheduleModal({ isOpen, onClose }) {
  const onClickClose = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen}>
      <Modal.Dimmed>
        <Modal.Container className="bg-white" width="80vh" height="60vh">
          <Modal.Close onClick={onClickClose} />
          <div className="flex flex-col items-center">
            <Modal.Title>일정 추가</Modal.Title>
            <div className="flex flex-col items-center justify-center w-11/12 h-[340px] bg-white mt-3 rounded-large mb-3">
              <Input className="w-full">
                <Input.Title>일정 이름</Input.Title>
                <Input.Wrapper className="justify-between">
                  <Input.Section
                    name="firstInvestmentAmount"
                    placeholder="일정 이름 입력"
                    type="input"
                  />
                </Input.Wrapper>
              </Input>
              <div className="flex justify-center">
                <Input className="w-2/5 mx-2 mt-10">
                  <Input.Title>시작일</Input.Title>
                  <Input.Wrapper className="justify-between">
                    <Input.Section name="storeArea" placeholder="YYYY.MM.DD" type="input" />
                  </Input.Wrapper>
                </Input>
                <Input.Unit className="mt-16">~</Input.Unit>
                <Input className="w-2/5 mx-2 mt-10">
                  <Input.Title>종료일</Input.Title>
                  <Input.Wrapper className="justify-between"></Input.Wrapper>
                </Input>
              </div>
            </div>
            <Button title={'추천받기'} className="w-[300px] p-3 text-xl tracking-wide mx-1 mt-0" />
          </div>
        </Modal.Container>
      </Modal.Dimmed>
    </Modal>
  );
}

export default ScheduleModal;
