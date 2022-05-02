import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for touchless delivery"
                backgroundImg="model-s.jpg"
                leftButton="Custom order"
                rightButton="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for touchless delivery"
                backgroundImg="model-y.jpg"
                leftButton="Custom order"
                rightButton="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for touchless delivery"
                backgroundImg="model-3.jpg"
                leftButton="Custom order"
                rightButton="Existing Inventory"
            />
            <Section
                title="Model x"
                description="Order Online for touchless delivery"
                backgroundImg="model-x.jpg"
                leftButton="Custom order"
                rightButton="Existing Inventory"
            />
            <Section
                title="Lowest cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftButton="Order now"
                rightButton="Learn more"
            />
            <Section
                title="LSolar for New Roofs"
                description="Solar Roof costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftButton="Order now"
                rightButton="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftButton="Order now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh
`