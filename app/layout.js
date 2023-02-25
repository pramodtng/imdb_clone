import Header from './Component/Header'
import NavBar from './Component/NavBar'
import Providers from './Component/Providers'
import SearchBox from './Component/SearchBox'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Header />
          <NavBar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  )
}
