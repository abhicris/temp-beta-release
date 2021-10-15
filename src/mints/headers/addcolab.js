import React from 'react'
import './addcolab.css'

function addcolab() {
    return (
        <div className="center">
            <view className="row">
                <label className="switch" >
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                    <text className="heading" >ADD COLLABORATORS / CO-CONTRIBUTORS</text>
                    <div className="circle">i</div>
                </label>
            </view>
        </div>
    )
}

export default addcolab
