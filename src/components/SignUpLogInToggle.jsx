import React from "react";
import styled from "styled-components";

const SignUpLogInToggle = ({ isLogin, toggleForm }) => {
  return (
    <StyledWrapper>
      <label htmlFor="filter" className="switch" aria-label="Toggle Filter">
        <input 
          type="checkbox" 
          id="filter" 
          checked={!isLogin} 
          onChange={toggleForm} // Call toggleForm when the checkbox is changed
        />
        <span>Log In</span>
        <span>Sign Up</span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    --_switch-bg-clr: cyan; /* Updated background color */
    --_switch-padding: 4px; /* Padding around button */
    --_slider-bg-clr: rgba(0, 123, 255, 0.65); /* Slider color unchecked */
    --_slider-bg-clr-on: rgba(0, 123, 255, 1); /* Slider color checked */
    --_slider-txt-clr: #ffffff; /* Text color */
    --_label-padding: 1rem 2rem; /* Padding around labels */
    --_switch-easing: cubic-bezier(0.47, 1.64, 0.41, 0.8); /* Easing on toggle switch */
    color: black;
    width: fit-content;
    display: flex;
    justify-content: center;
    border-radius: 9999px;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    position: relative;
    isolation: isolate;
  }

  .switch input[type="checkbox"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .switch > span {
    display: grid;
    place-content: center;
    transition: opacity 300ms ease-in-out 150ms;
    padding: var(--_label-padding);
  }

  .switch::before,
  .switch::after {
    content: "";
    position: absolute;
    border-radius: inherit;
    transition: inset 150ms ease-in-out;
  }

  /* Switch slider */
  .switch::before {
    background-color: var(--_slider-bg-clr);
    inset: var(--_switch-padding) 50% var(--_switch-padding) var(--_switch-padding);
    transition: inset 500ms var(--_switch-easing),
      background-color 500ms ease-in-out;
    z-index: -1;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.3),
      0 1px rgba(255, 255, 255, 0.3);
  }

  /* Switch bg color */
  .switch::after {
    background-color: var(--_switch-bg-clr);
    inset: 0;
    z-index: -2;
  }

  /* Switch hover & focus */
  .switch:focus-within::after {
    inset: -0.25rem;
  }

  .switch:has(input:checked):hover > span:first-of-type,
  .switch:has(input:not(:checked)):hover > span:last-of-type {
    opacity: 1;
    transition-delay: 0ms;
    transition-duration: 100ms;
  }

  /* Switch hover */
  .switch:has(input:checked):hover::before {
    inset: var(--_switch-padding) var(--_switch-padding) var(--_switch-padding) 45%;
  }

  .switch:has(input:not(:checked)):hover::before {
    inset: var(--_switch-padding) 45% var(--_switch-padding) var(--_switch-padding);
  }

  /* Checked - move slider to right */
  .switch:has(input:checked)::before {
    background-color: var(--_slider-bg-clr-on);
    inset: var(--_switch-padding) var(--_switch-padding) var(--_switch-padding) 50%;
  }

  /* Checked - set opacity */
  .switch > span:last-of-type,
  .switch > input:checked + span:first-of-type {
    opacity: 0.75;
  }

  .switch > input:checked ~ span:last-of-type {
    opacity: 1;
  }
`;

export default SignUpLogInToggle;
