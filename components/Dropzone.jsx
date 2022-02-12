import { useCallback, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { styled } from '@mui/system'

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isFocused) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled('div')(({props}) => (
  {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: '2px',
    borderRadius: '2px',
    borderColor: getColor(props),
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  }
))

export default function Dropzone(props) {

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  }, [])

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*', onDrop});
  
  return (
    <div className="container">
      <Container {...getRootProps({isFocused, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Container>
    </div>
  );
}

