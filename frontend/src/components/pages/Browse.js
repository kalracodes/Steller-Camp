import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import CardP from './CardP'

export default function Browse() {
  const [petitions,setPetitions] = useState([]);

  // useEffect(() => {
    
  //   (async () => {
  //     const data= await fetchStorage();
  //     const test = []
  //     Object.values(data).forEach((petition)=> {
  //       test.push({'title': petition.title, 'content': petition.content,'signatures': petition.signature, 'number':petition.key})
  //     })
  //     setPetitions(test)
  //   })();
  // }, []);
  return (
    <>
    <Navbar/>
    <div className=''>
      <h3 className='text-5xl font-extrabold mt-4 text-white text-center'> Browse Other Petitons </h3>
      <div className='grid justify-items-center'>
      <CardP
						id={0}
						title={"Lok Sabha - EV Bill No. 179"}
						content={"If public service is a noble endeavour, then, among all the ways of cherishing such a noble endeavour, politics, single handedly, stands apart. That is because politics is a reflection of you, me and our families which together form into the society.From western philosophers (Socrates, Plato .... Immanuel Kant etc) to Indic philosophers (Buddha, Kautilya ..... Gandhi, Babasaheb Ambedkar etc), our ancient, medievel and modern philosophical texts rightly emphasized on the significance of political power in social transformation.In Democracy (which literally means People's rule or self-rule) the political parties, their members and their electoral candidates have a predominant role in assimilation of interests of various groups and communities into the idea of public interest based on the concept of greater good."}
						signature={320}
						number={1}
					/>
        <CardP
          id={0}
          title={"Uniform civil code"}
          content={"There are so much of cases pending in courts in the country. Uniform civil code will be a game changer to reduce the pendency considerably."}
          signature={220}
          number={1}
        />
      <CardP
						id={0}
						title={"Why is acid so easily available?"}
						content={"She was on her way to her school with her younger sister, but the 17-year-old girl in Delhi ended up in a hospital with severe injuries on her face, neck and eyes.\nBarely 100 meters away from her home, a disgruntled man came on a bike and threw acid on her face. \nI shudder to think that this can happen to any girl in this country. \nI am an acid attack survivor myself and every new case of a gruesome attack like this reopens my own wounds. It breaks my heart to write that such incidents will continue until we as a society unite and ask the authorities to put an end to the sale of acid. \nMedia reports say that her attackers bought the acid online. This should outrage every single person in this country who cares about women’s safety.\nAre our lives this cheap? \nThe supreme court in 2013 had banned the unregulated sale of acid in the country. Then why is it so easy to buy a bottle of acid that not just ruins a person’s face but their entire life?\nMedia reports say that the 17-year-old girl in Delhi was about to appear for her CLAT exams for admission to a national law university. Look what she has to go through now.\nWe will not put up with this anymore and we wont stop speaking until acid attacks stop.\nSign my petition and demand that there be a crackdown and complete ban on the sale of acid in the country, be it online or over the counter.\n\nPlease join me in speaking up against acid attacks. Sign my petition and share it with whoever you can."}
						signature={225}
						number={1}
					/>
					<CardP
						id={0}
						title={"Jee Mains first Attempt to remove 75% crieterion"}
						content={"We are JEE Aspirants..we want the first attempt to be held in April as Jan is too early..NTA has announced the dates very late and droppers are struggling to complete their syllabus..students of class 12th have preboards, practicals, project, etc..and they are really stressed about this..NTA should think deeply about this as this is not fair! #JEEMainsinApril... Also many boards like Bihar board, Assam board has their exams in the same gap, where would they focus! We need justice.."}
						signature={45}
						number={1}
					/>
					<CardP
						id={0}
						title={"Mental Help For All"}
						content={"I know so many people who have mental health problems, and who need professional help but they don't have access to it. The problem is very wide and it will take time to make proper provisions on a larger scale but can we start somewhere? "}
						signature={15}
						number={1}
					/>
      </div>
    </div>
    </>
  )
}
