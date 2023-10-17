import Link from "next/link";

export default function Home() {
  return ( 
  <>
  <h1>MainPage</h1>  
  <h2 className="{styles.title}">
     <Link href="/products">Products are here</Link>
  </h2>
  </>
  )
}