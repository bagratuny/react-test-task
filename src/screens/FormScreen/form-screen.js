import React, { useEffect, useState } from "react";
import { Input } from "../../common/components/Input";
import styled from "styled-components";
import { Button } from "../../common/components/Button";
import { Card } from "../../common/components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { enterForm, updateForm } from "../../store/actions";
import { getFormState, getState } from "../../store/selectors";
import { ButtonContainer } from "../../common/components/ButtonContainer";

const StyledForm = styled.form`
  width: 100%;

  & > label {
    margin-bottom: 15px;
  }
  
  & legend {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
  }
`;

const StyledErrorMessage = styled.div`
  padding: 10px 15px;
  background-color: rgba(219, 113, 148, 0.15);
  border: 1px solid #db7194;
  border-radius: 3px;
  display: block;
  font-size: 13px;
  color: #721C25;
`;

const FormScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { name, phone, startDate, endDate } = useSelector(getFormState);
  const { datesConsistent, formValid } = useSelector(getState);

  const dispatchUpdateForm = payload => updateForm(payload)(dispatch);

  const [validation, setValidation] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (formValid) {
      enterForm({ name, phone, startDate, endDate })(dispatch);
      history.push("accept");
    } else {
      setValidation(true);
    }
  };

  useEffect(() => {
    if (formValid) setValidation(false);
  }, [formValid]);

  const renderError = () => {
    if (datesConsistent || !validation) return null;

    return (
      <StyledErrorMessage>
        Дата начала должна быть раньше даты конца
      </StyledErrorMessage>
    );
  };

  return (
    <Card>
      <StyledForm onSubmit={onSubmit}>
        <legend>Заполните форму</legend>
        <Input
          label="Имя и фамилия"
          placeholder="Василий Петров"
          onChange={dispatchUpdateForm}
          name="name"
          value={name.value}
          valid={name.valid}
          isRequired={true}
          validation={validation}
          caption="Только русские буквы"
        />
        <Input
          label="Номер телефона"
          placeholder="+7 (123) 456 33-33"
          onChange={dispatchUpdateForm}
          name="phone"
          value={phone.value}
          valid={phone.valid}
          isRequired={true}
          validation={validation}
          caption="В формате +7 (999) 999-99-99"
        />
        <Input
          label="Дата начала работы"
          placeholder="01.01.2019"
          onChange={dispatchUpdateForm}
          name="startDate"
          value={startDate.value}
          valid={startDate.valid}
          isRequired={true}
          validation={validation}
          caption="День, месяц, год. Значение не может быть больше даты конца работы"
        />
        <Input
          label="Дата конца работы"
          placeholder="01.01.2020"
          onChange={dispatchUpdateForm}
          name="endDate"
          value={endDate.value}
          valid={endDate.valid}
          isRequired={true}
          validation={validation}
          caption="День, месяц, год. Значение не может быть меньше даты начала работы"
        />
        {renderError()}
        <ButtonContainer>
          <Button text="Далее" />
        </ButtonContainer>
      </StyledForm>
    </Card>
  );
};

export { FormScreen };
