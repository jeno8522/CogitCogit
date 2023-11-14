import React, { useState } from 'react';
import { Modal } from '@/components/Modal';
import Button from '@/components/Button';
import AddAlgorithmQuest from './AddAlgorithmQuest';
import PlusIcon from '@/icons/plus.svg';

import CloseIcon from '@/icons/close.svg';

function QuestModal({ isOpen, onClose }) {
  const [data, setData] = useState([]);
  const [questList, setQuestList] = useState([]);

  const onClickClose = () => {
    onClose();
  };
  const onClickAddQuest = () => {
    {
      data.map((idx) => {
        return setQuestList([...questList, `quest${idx}`]);
      });
    }
    console.log(data);
    onClose();
  };
  const onCreate = () => {
    setData([...data, `quest${data.length}`]);
  };
  const onClickDelete = () => {
    const newList = [];
    setData(newList);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!isNaN(value)) {
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      alert('링크를 입력해주세요.');
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <Modal.Dimmed>
        <Modal.Container className="bg-white" width="80vh" height="65vh">
          <Modal.Close onClick={onClickClose} />
          <div className="flex flex-col items-center">
            <Modal.Title>문제 추가</Modal.Title>
            <div className="flex flex-row-reverse w-full">
              <Button
                className="p-3 mr-10 text-xl bg-primary hover:bg-warning w-1/7 rounded-small"
                onClick={onClickDelete}
              >
                <CloseIcon width={24} height={24} />
              </Button>
              <Button
                className="p-3 mr-1 text-xl w-1/7 bg-primary hover:bg-hover rounded-small"
                onClick={onCreate}
              >
                <PlusIcon width={24} height={24} />
              </Button>
            </div>
            <div className="w-11/12 h-[320px] overflow-auto scrollbar-default bg-white rounded-large mb-3">
              {data.map((quest, idx) => {
                return <AddAlgorithmQuest key={idx} index={idx} handleChange={handleChange} />;
              })}
            </div>
            <Button
              className="w-1/3 p-3 text-xl bg-primary hover:bg-hover rounded-small"
              onClick={onClickAddQuest}
            >
              추가하기
            </Button>
          </div>
        </Modal.Container>
      </Modal.Dimmed>
    </Modal>
  );
}

export default QuestModal;
