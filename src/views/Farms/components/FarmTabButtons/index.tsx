import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link, useParams } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Text, Toggle } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const FarmTabButtons = ({ stakedOnly, setStakedOnly }) => {
  const { url } = useRouteMatch()
  const { tierId, race } = useParams<{ tierId: string, race: string }>()
  const TranslateString = useI18n()

  const isActive = window.location.pathname.search('history') === -1

  const isShowTeam = window.location.pathname.search('/tier/0/All') === -1
  let team = 0
  if (window.location.pathname.search('/team/1') > 0) {
    team = 1
  }
  if (window.location.pathname.search('/team/2') > 0) {
    team = 2
  }

  const activeUrl = team === 0 ? url : `${url}/team/${team}`;
  const inactiveUrl = team === 0 ? `${url}/history` : `${url}/team/${team}/history`;

  const teamAllUrl = isActive ? `${url}` : `${url}/history`;
  const teamHumansUrl = isActive ? `${url}/team/1` : `${url}/team/1/history`;
  const teamOrcsUrl = isActive ? `${url}/team/2` : `${url}/team/2/history`;


  return (
    <Wrapper>
      <ToggleWrapper>
        <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} />
        <Text> {TranslateString(699, 'Staked only')}</Text>
      </ToggleWrapper>
      <ButtonMenu activeIndex={isActive ? 0 : 1} size="sm" variant="subtle">
        <ButtonMenuItem as={Link} to={`${activeUrl}`}>
          {TranslateString(698, 'Active')}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${inactiveUrl}`}>
          {TranslateString(700, 'Inactive')}
        </ButtonMenuItem>
      </ButtonMenu>
      {isShowTeam && (
        <div style={{ marginLeft: '20px' }}>
          <ButtonMenu activeIndex={team} size="sm" variant="subtle">
            <ButtonMenuItem as={Link} to={`${teamAllUrl}`}>
              {TranslateString(729, 'All')}
            </ButtonMenuItem>
            <ButtonMenuItem as={Link} to={`${teamHumansUrl}`}>
              {TranslateString(730, 'Humans')}
            </ButtonMenuItem>
            <ButtonMenuItem as={Link} to={`${teamOrcsUrl}`}>
              {TranslateString(731, 'Orcs')}
            </ButtonMenuItem>
          </ButtonMenu>
        </div>
      )}
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  @media(max-width: 600px) {
    flex-direction: column;
    > div {
      margin: 8px 0px;
    }
  }

`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;

  ${Text} {
    margin-left: 8px;
  }
`
