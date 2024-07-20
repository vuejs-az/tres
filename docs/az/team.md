---
layout: page
title: Komandamızla Tanış Olun
description: TresJS ekosistemi qlobal bir komanda tərəfindən yaradılır və qorunur.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { core } from './_data/team'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Komandamızla Tanış Olun</template>
    <template #lead>
      TresJS ekosistemi qlobal bir komanda tərəfindən yaradılır və qorunur.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="core" />
  <!-- <VPTeamPageSection>
    <template #title>Team Emeriti</template>
    <template #lead>
      Here we honor some no-longer-active team members who have made valuable
      contributions in the past.
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="emeriti" />
    </template>
  </VPTeamPageSection> -->
</VPTeamPage>
