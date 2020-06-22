import React from 'react'
import aws from '../img/icons/aws.png'
import awsLambda from '../img/icons/aws-lambda.png'
import cordova from '../img/icons/cordova.png'
import gatsby from '../img/icons/gatsby.png'
import h from '../img/icons/h.png'
import hugo from '../img/icons/hugo.png'
import jekyll from '../img/icons/jekyll.png'
import meteor from '../img/icons/meteor.png'
import node from '../img/icons/node.png'
import react from '../img/icons/react.png'

const competencesList = [
  {
    name: 'Meteor',
    icons: [meteor],
  },
  {
    name: 'JAM-stack',
    icons: [gatsby, hugo, jekyll, h],
  },
  {
    name: 'Javascript / NodeJS',
    icons: [node],
  },
  {
    name: 'React',
    icons: [react],
  },
  {
    name: 'Cloud',
    icons: [aws, awsLambda],
  },
  {
    name: 'Mobile Development',
    icons: [react, cordova],
  },
]

const Competences = () => (
  <section id='competences' className='competences'>
    <div className='container'>
      <div className='inner'>
        <h3>Main Technical Competences</h3>
        <div className='competences-list'>
          {competencesList.map((item, i) => (
            <div key={i} className='competences-item'>
              <div className='title'>{item.name}</div>
              <div className='icons'>
                {item.icons.map((icon, q) => (
                  <img className='icons-item' key={q} src={icon} />
                ))}
                <div className='icons-bullit'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Competences
