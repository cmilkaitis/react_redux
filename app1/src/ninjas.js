import React from 'react';

const Ninjas = (props) => { // or destruct right in the prop param { ninjas }
    const { ninjas } = props
    const ninjaList = ninjas.map(ninja => {
        // if (ninja.age >= 33) {
        //     return (
                {/* <div className="ninja" key={ninja.id}>
                    <div>Name: { ninja.name }</div>
                    <div>Age: { ninja.age }</div>
                    <div>Belt: { ninja.belt }</div>
                </div> */}
        //     )
        // } else {
        //     return null
        // }
        return ninja.age > 33 ? (
            <div className="ninja" key={ninja.id}>
                    <div>Name: { ninja.name }</div>
                    <div>Age: { ninja.age }</div>
                    <div>Belt: { ninja.belt }</div>
                </div>
        ) : null
    })
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas