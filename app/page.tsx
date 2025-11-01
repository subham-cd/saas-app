import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'


const Page = () => {
  return (
    <main>
      <h1 >Popular Companions </h1>
       <section className='home-section'>
        <CompanionCard 
          id="123"
          name="Neural the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"

        />
        <CompanionCard 
          id="466"
          name="Countsy the Number wizard"
          topic="Derivatives & Integrals"
          subject="Math"
          duration={30}
          color="#6eff7f"

        />
        <CompanionCard 
          id="564"
          name="verba the Vocabulary Builder"
          topic="English Literature"
          subject="language"
          duration={30}
          color="#3cc5ce"

        />
       
       </section>
       <section className='home-section'>
           <CompanionsList
             title="Recently Completed sessions"
             companions = {recentSessions}
             classNames="w-2/3 max-lg:w-full"
           
           
           />
           <CTA/>
       </section>


    </main>
  )
}

export default Page