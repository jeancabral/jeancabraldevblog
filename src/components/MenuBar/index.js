import React from 'react'

import { Home } from 'styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular/UpArrowAlt'
import { Bulb as Light } from 'styled-icons/boxicons-regular/Bulb'
import { Grid } from 'styled-icons/boxicons-solid/Grid'

import * as s from './styled'

const MenuBar = () => (
  <s.MenuBarWrapper>
    <s.MenuBarGroup>
      <s.MenuBarLink to="/" title="Voltar para Home">
        <s.MenuBarItem>
          <Home />
        </s.MenuBarItem>
      </s.MenuBarLink>
      <s.MenuBarLink to="/search/" title="Pesquisar">
        <s.MenuBarItem>
          <Search />
        </s.MenuBarItem>
      </s.MenuBarLink>
    </s.MenuBarGroup>
    <s.MenuBarGroup>
      <s.MenuBarItem title="Mudar o tema">
        <Light />
      </s.MenuBarItem>
      <s.MenuBarItem title="Mudar visualização">
        <Grid />
      </s.MenuBarItem>
      <s.MenuBarItem title="Ir para o Topo">
        <Arrow />
      </s.MenuBarItem>
    </s.MenuBarGroup>
  </s.MenuBarWrapper>
)

export default MenuBar
