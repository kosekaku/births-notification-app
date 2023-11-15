import { ReactNode } from 'react';
import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalActions,
  ButtonStrip,
  Button,
} from '@dhis2/ui';

interface ModalCardProps {
  title: string;
  content: ReactNode;
  onSave: () => void;
  onCancel: () => void;
}

const ModalCard = ({ title, content, onSave, onCancel }: ModalCardProps) => {
  return (
    <div>
      <Modal>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{content}</ModalContent>
        <ModalActions>
          <ButtonStrip end>
            <Button onClick={onCancel()} secondary>
              Canceal
            </Button>
            <Button onClick={onSave()} primary>
              Save
            </Button>
          </ButtonStrip>
        </ModalActions>
      </Modal>
    </div>
  );
};

export default ModalCard;
