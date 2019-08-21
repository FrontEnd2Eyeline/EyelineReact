import React from 'react'
import './Loader.scss' 

const HomeContainer = () => {
    return (
        <div className="Loader-Container">
            <div className="Loader">
            <div class="Loader__Face">
                <div class="Loader__Face-Circle"></div>
            </div>
            <div class="Loader__Face">
                <div class="Loader__Face-Circle"></div>
            </div>
            </div>
        </div>
    )
}

export default HomeContainer
