import { getDictionary } from '@/dictionaries'

export default async function ExamplePage({ params: { lang } }) {
  const dict = await getDictionary(lang)
  
  return (
    <div>
      <h1>{dict.common.title}</h1>
      <p>{dict.common.description}</p>
      
      {/* Example of using translations in a component */}
      <button>{dict.common.next}</button>
    </div>
  )
}