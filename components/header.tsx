import Link from 'next/link'
import { WEBSITE_NAME } from '../lib/constants'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold mb-20 mt-8">
      <Link href="/" className="hover:underline">
        {WEBSITE_NAME}
      </Link>
      .
    </h2>
  )
}

export default Header
