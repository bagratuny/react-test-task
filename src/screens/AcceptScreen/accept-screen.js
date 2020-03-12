import React, { useState } from "react";
import { Card } from "../../common/components/Card";
import { Button } from "../../common/components/Button";
import { Modal } from "../../common/components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getFormState, getState } from "../../store/selectors";
import { sendForm } from "../../store/actions";
import { useHistory } from "react-router-dom";
import { ButtonContainer } from "../../common/components/ButtonContainer";
import { List } from "../../common/components/List";

const AcceptScreen = () => {
  const form = useSelector(getFormState);
  const { isFormEntered } = useSelector(getState);
  const dispatch = useDispatch();
  const history = useHistory();

  const properties = [
    { key: "Полное имя", value: form.name.value },
    { key: "Телефон", value: form.phone.value },
    { key: "Дата начала работы", value: form.startDate.value },
    { key: "Дата конца работы", value: form.endDate.value }
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const onAccept = () => {
    sendForm()(dispatch);
    setModalOpen(true);
  };
  const onBack = () => history.goBack();

  if (!isFormEntered) {
    history.push("");
  }

  return (
    <Card>
      <Modal active={isModalOpen} onClose={setModalOpen}>
        <h3>Форма успешно отправлена!</h3>
      </Modal>
      <h4>Проверьте корректность данных</h4>
      <List items={properties} />
      <ButtonContainer>
        <Button onClick={onAccept} text="Подтвердить" />
        <Button onClick={onBack} text="Назад" />
      </ButtonContainer>
    </Card>
  );
};

export { AcceptScreen };
