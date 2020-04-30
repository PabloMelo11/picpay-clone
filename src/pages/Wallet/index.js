import React, { useState } from "react";
import { Switch } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMthods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from "./styled";

import creditCard from "../../images/credit-card.png";

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function hadleToggleVisiblity() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Header
        colors={useBalance ? ["#52e78c", "#1ab563"] : ["#d3d3d3", "#868686"]}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "0,00" : "----"}</Bold>
            </Value>

            <EyeButton onPress={hadleToggleVisiblity}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo esta rendendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>

      <PaymentMthods>
        <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>
      </PaymentMthods>

      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>Cadastre seu cartao de credito</CardTitle>
            <CardInfo>
              Cadatre seu cartao de credito para fazer pagamentos mesmo quando
              nao tiver saldo no seu PicPay
            </CardInfo>
          </CardDetails>

          <Img source={creditCard} resizeMode="contain" />
        </CardBody>

        <AddButton>
          <AntDesign name="pluscircleo" size={30} color="#0db060" />
          <AddLabel>Adicioanr cartao de credito</AddLabel>
        </AddButton>
      </Card>

      <UseTicketContainer>
        <UseTicketButton>
          <MaterialCommunityIcons
            name="ticket-outline"
            size={20}
            color="#0db060"
          />
          <UseTicketLabel>Usar codigo promocional</UseTicketLabel>
        </UseTicketButton>
      </UseTicketContainer>
    </Wrapper>
  );
}
