import { styled } from 'styled-components'
import MenuItems from './MenuItems'
import Tables from './Tables'
import OrderInfo from './OrderInfo'
import { PrimaryButton, SecondaryButton } from '../Buttons'
import { useSelector } from 'react-redux'
import { type RootState } from '../../app/store'

const FormAddOrderContainer = styled.form`
  width: 95%;
  height: 93%;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  overflow-y: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 15px;
  animation: scaleIn 0.4s ease-in-out;

  & > div {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    overflow-y: auto;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow-y: auto;
    }
  }

  @keyframes scaleIn {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
`

const FormAddOrderHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 3px solid #000;

  & > div {
    display: flex;
    gap: 10px;

    & > button {
      width: 100px;
    }
  }
`

const FormAddOrderWrapper = styled.div`
  overflow-y: auto;
`

interface Props {
  onClose: () => void
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void

}

const FormAddOrder: React.FC<Props> = ({ onClose, onFormSubmit }) => {
  const { newTableOrder } = useSelector((state: RootState) => state.order)
  const { orderItems } = useSelector((state: RootState) => state.orderItem)

  return (
    <FormAddOrderContainer onSubmit={onFormSubmit}>
      <FormAddOrderHeader>
        <h2>Order Form</h2>
        <div>
          <SecondaryButton type="button" onClick={onClose}>Cancel</SecondaryButton>
          {
            newTableOrder !== '' && orderItems.length > 0 && (
              <PrimaryButton type="submit">Save</PrimaryButton>
            )
          }
        </div>
      </FormAddOrderHeader>
      <div>
        <MenuItems />
        <FormAddOrderWrapper>
          <Tables />
          <OrderInfo />
        </FormAddOrderWrapper>
      </div>
    </FormAddOrderContainer>
  )
}

export default FormAddOrder
