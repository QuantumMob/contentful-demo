import React from 'react';

import Alert from './Alert'
import Card from './Card'
import Image from './Image'

class Page extends React.Component {
  renderSection = (section) => {
    console.log('section', section)
    const { _type } = section

    if (_type === 'alert') {
      return <Alert key={section.id} data={section}></Alert>
    }
    if (_type === 'card') {
      return <Card key={section.id} data={section}></Card>
    }
    if (_type === 'image') {
      return <Image key={section.id} data={section}></Image>
    }
    return <div></div>
  }

  render() {
    const { data } = this.props
    return data.sections.map(section => this.renderSection(section))
  }
}

export default Page
