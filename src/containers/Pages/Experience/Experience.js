import React, { Component } from 'react';
import SubTitle from '../../../components/SubTitle'

class Experience extends Component {
    render() {

        const { data = [] } = this.props

        const _experience = data.map((item, index) => {
            // return <ItemEducation key={index} data={item}/>    
        })

        return (
            <section>
                <SubTitle texto={['Professional', 'Experience']}  size={0.6} />
                <div className='spacing-left-top educations container-fluid'>
                    {
                        _experience
                    }
                </div>
            </section>
        );
    }
}

export default Experience;