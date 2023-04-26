import React from 'react'
import Link from 'next/link'

// INTERNAL IMPORT 
import Style from "./Discover.module.css"

const Discover = () => {
  // DUMMY DATA FOR DISCOVER NAVIGATION MENU 
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "nft-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    }
  ]

  return (
    <div>
      {discover.map((element, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${element.link}` }}>
            {element.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Discover