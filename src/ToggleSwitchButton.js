import React from 'react'
import styled from 'styled-components'

const StyledToggleSwitchButton = styled.div`
		& input {
				display: none;
				&:checked + label {
						background-color: #eee;
						&::before {
								left: 2em;
							}
					}
		}

		& label {
				background-color: #383896;
				border-radius: 2em;
				
				display: flex;
				align-items: center;
				justify-content: space-around;
				height: 2em;
				position: relative;
				transition: .5s;
				width: 3.75em;
		

		&::before {
				background: #fff;
				border-radius: 100%;
				content: '';
				display: inline-block;
				height: 1.5em;
				position: absolute;
				left: 0.25em;
				transition: ease-out;
				width: 1.5em;
				z-index: 2;
		}
	}
`


const ToggleSwitchButton = ({ className, handleChange }) => (
	<StyledToggleSwitchButton className={className}>
		<input id="btn-mode" type="checkbox" onChange={handleChange}  />
		<label htmlFor="btn-mode">
    </label>
	</StyledToggleSwitchButton>
)

export default ToggleSwitchButton;