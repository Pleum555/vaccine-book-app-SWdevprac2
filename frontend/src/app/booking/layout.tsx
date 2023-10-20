export default async function Layout( props: {
  children: React.ReactNode
  dashboard: React.ReactNode
}) {
  return (
    <main className='h-full bg-stone-200 w-[100%] flex flex-col items-center space-y-4 '>
      {props.dashboard}
      {props.children}
    </main>
  )
}
