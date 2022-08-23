import { ReactElement } from 'react';
import SiteHeader from './SiteHeader'

const Layout = (props: {children: ReactElement}) =>{
  return(
    <>
      <SiteHeader/>
      {props.children}
    </>
  )
}

export default Layout