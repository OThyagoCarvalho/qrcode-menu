import { Button, Input } from '@nextui-org/react';
import * as React from 'react';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';

interface Props {
variant?: "flat" | "bordered" | "underlined" | "faded",
placeholder?: string
onConfirmInput?: (inputValue: string) => void
}

const InputText = ({variant = 'flat',
                    placeholder = 'eg. Hamburguer',
                    onConfirmInput,
                     ...props}: Props) => {
  const [inputValue, setInputValue] = React.useState('');
  const [isConfirmed, setIsConfirmed] = React.useState(false);
  const [ hasError, setHasError ] = React.useState(false)

  const toggleIsConfirmed = () => {
    setIsConfirmed(!isConfirmed);
    onConfirmInput && onConfirmInput(inputValue)
  };

  if (isConfirmed) {
    return (
        <div
        style={{
            display: 'flex',
            height: '2rem',            
            gap: '4px',
            alignItems: 'end',
            justifyContent: 'space-between'
        }}>
      <Input
      readOnly
      color='default'
      size='sm'
      fullWidth
      type="text"
      variant= {variant}
      placeholder={placeholder}
      value={inputValue}
      className="max-w-xs min-w-[150px]"
      onValueChange={setInputValue}     
    />      
          <Button
            isIconOnly
            size='sm'
            variant = 'light'
          >
            <EditNoteRoundedIcon
            style={{
              cursor: 'pointer',
              color: '#555'
            }}
            color = 'inherit'
            fontSize='medium'
            onClick={toggleIsConfirmed} /> 
          </Button>
        </div>
    )
  }

  return (
    <div
        style={{
            display: 'flex',
            height: '2rem',           
            gap: '4px',
            justifyContent: 'space-between',
            alignItems: 'end'
        }}>
      <Input
      color= { (!hasError || inputValue) ? 'default' : 'danger'}
      size='sm'
      fullWidth
      type="text"
      variant= {variant}
      placeholder={placeholder}
      value={inputValue}
      className="max-w-xs min-w-[150px]"
      onValueChange={setInputValue}
      onClear={()=> setInputValue('')}
    />
    {
      inputValue ?
      <Button
      isIconOnly
      size='sm'
      variant = 'light'
      >
      <AddTaskRoundedIcon
        style={{
          cursor: 'pointer',    
          color: '#555'      
        }}
        color = 'inherit'
        fontSize='medium'
        onClick={() => inputValue ? toggleIsConfirmed() : setHasError(true)} />



    </Button> : <div 
        style={{
          width: '24px',
          height: '24px'
        }}
      />
      }
    </div>
  );
};

export default InputText 