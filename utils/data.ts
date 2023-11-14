import type { TopData } from '.'

export function useMaxStreak(data: Ref<{
  date: Date
  duration: number
}[]>) {
  return computed(() => {
    if (data.value === null) {
      return 0
    }
    let streak = 0
    let maxStreak = 0
    for (let i = 0; i < data.value.length; i++) {
      const d = data.value[i]
      if (d.duration === 0) {
        maxStreak = Math.max(maxStreak, streak)
        streak = 0
        continue
      }
      streak++
    }
    return maxStreak
  })
}

export function useCurrentStreak(data: Ref<{
  date: Date
  duration: number
}[]>) {
  return computed(() => {
    if (data.value === null) {
      return 0
    }
    let streak = 0
    for (let i = 0; i < data.value.length; i++) {
      const d = data.value[i]
      if (d.duration === 0) {
        break
      }
      streak++
    }
    return streak
  })
}

export function useTodayMinutes(data: Ref<{
  data: {
    duration: number
    time: string
  }[]
} | null>) {
  return computed(() => {
    if (!data.value) {
      return 0
    }
    const today = new Date()
    const todayString = today.toISOString().slice(0, 10)
    const todayData = data.value.data.find(d => d.time.slice(0, 10) === todayString)
    return todayData?.duration ?? 0
  })
}

export function useTotalMinutes(data: Ref<{
  data: {
    duration: number
    time: string
  }[]
} | null>) {
  return computed(() => {
    if (!data) {
      return 0
    }
    return data.value?.data.reduce((acc, cur) => acc + cur.duration, 0) ?? 0
  })
}

// Function to transform platform data
export function transformTopPlatformData(data: TopData[]) {
  return data.map((d) => {
    if (d.field.toLocaleLowerCase().includes('mac')) {
      d.icon = 'i-mdi-apple'
    }
    else if (d.field.toLocaleLowerCase().includes('window')) {
      d.icon = 'i-mdi-microsoft-windows'
    }
    else if (d.field.toLocaleLowerCase().includes('linux')) {
      d.icon = 'i-codicon-terminal-linux'
    }
    else {
      d.icon = 'i-mdi-desktop-classic'
    }
    return d
  })
}

export function transformTopLanguageData(data: TopData[]) {
  return data.map((d) => {
    d.icon = iconMap.get(d.field)
    d.field = getLanguageName(d.field)
    return d
  })
}

export async function useAllTopData(hasData: MaybeRef<boolean>, days: MaybeRef<number>) {
  let languageTopData: Ref<TopData[] | null> = ref(null)
  let projectTopData: Ref<TopData[] | null> = ref(null)
  let platformTopData: Ref<TopData[] | null> = ref(null)
  if (unref(hasData)) {
    const limit = 5
    const durationInMinutes = unref(days) * 1440
    try {
      [languageTopData, projectTopData, platformTopData] = await Promise.all([
        fetchTop('language', durationInMinutes, limit, { transform: transformTopLanguageData }),
        fetchTop('project', durationInMinutes, limit),
        fetchTop('platform', durationInMinutes, limit, { transform: transformTopPlatformData }),
      ])
    }
    catch (error) {
      // Handle errors here
      console.error(error)
    }
  }
  return [languageTopData, projectTopData, platformTopData]
}