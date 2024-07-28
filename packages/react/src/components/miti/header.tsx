type HeaderProps = {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="miti-header-container">
      <h1>{title}</h1>
      hello
    </div>
  )
}

export default Header
