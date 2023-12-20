interface DetailRowProps {
  label: string
  content: string | number
}

const DetailRow = (props: DetailRowProps) => {
  const { content, label } = props

  return (
    <div>
      <label className='inline-block w-32 md:w-48'>{label}:</label>
      <span>{content}</span>
    </div>
  )
}

export default DetailRow
