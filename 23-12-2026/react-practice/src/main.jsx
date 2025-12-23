import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './Creating_and_nesting_components/display_data'
import Counter from './State/state'
import Appbase from './React_Component/composing_component'
import Form from "./React_Component/decomposing_component";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)
