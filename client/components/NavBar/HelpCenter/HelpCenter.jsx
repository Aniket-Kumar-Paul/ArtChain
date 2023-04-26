import React from 'react'
import Link from 'next/link'

// INTERNAL IMPORT 
import Style from "./HelpCenter.module.css"


const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "about"
    },
    {
      name: "Contact Us",
      link: "contact-us"
    },
    {
      name: "Sign Up",
      link: "sign-up"
    },
    {
      name: "Sign In",
      link: "sign-in"
    },
    {
      name: "Subscription",
      link: "subscription"
    },
  ]

  return (
    <div>
      {helpCenter.map((element, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${element.link}` }}>
            {element.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default HelpCenter