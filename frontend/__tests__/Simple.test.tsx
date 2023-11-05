import Banner from "@/components/Banner";
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"

// Mock useRouter
jest.mock('next/navigation', ()=>({
    useRouter() {
        return{
            prefetch: ()=>null
        }
    }
}))

// Mock useSession
jest.mock('next-auth/react', ()=>({
    useSession() {
        return{ data: null, user: {name:"Tester"} }
    }
}))

describe('Banner', () => {
  it('should have top banner title', ()=>{
    render(<Banner imgSrc={['/img/Background.jpg', '/img/Background2.jpg', '/img/Background3.jpg', '/img/Background4.jpg']} 
    topic='Vaccine Book App' desc='explore to vaccine book application'/>)
    const bannertext = screen.getByText('Vaccine Book App')
    expect(bannertext).toBeInTheDocument()
  })

  const covers = ['Background.jpg', 'Background2.jpg', 'Background3.jpg', 'Background4.jpg']

  it('should change image when click button', async()=>{
    render(<Banner imgSrc={['/img/Background.jpg', '/img/Background2.jpg', '/img/Background3.jpg', '/img/Background4.jpg']} 
    topic='Vaccine Book App' desc='explore to vaccine book application'/>)
    const banner = screen.getByRole('img') as HTMLImageElement

    for(let i=0; i<covers.length;i++)
    {
        await userEvent.click(banner)
        expect(banner.src).toContain(covers[(i+1)%covers.length])
    }

    
  })
})