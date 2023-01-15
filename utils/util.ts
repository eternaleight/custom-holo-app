const forbiddenChannels = [
  "UCKeAhJvy8zgXWbh9duVjIaQ",
  "UCZgOv3YDEs-ZnZWDYVwJdmA",
  "UC9mf_ZVpouoILRY9NUIaK-w",
  "UCNVEsYbiZjH5QLmGeSgTSzg",
  "UCGNI4MENvnsymYjKiZwv9eg",
  "UCANDOlYTJT7N5jlRC3zfzVA",
  "UChSvpZYRPh0FvG4SJGSga3g",
  "UCwL7dgTxKo8Y4RFIKWaf8gA",
  "UC6t3-_N8A6ME1JShZHHqOMw",
  "",
  "UCc88OV45ICgHbn3ZqLLb52w",
  "UCgRqGV1gBf2Esxh0Tz1vxzw",
  "UCkT1u65YS49ca_LsFwcTakw",
  "UCdfMHxjcCc2HSd9qFvfJgjg",
  "",
  "UCyxtGMdWlURZ30WSnEjDOQw",
  "UC7MMNHR-kf9EN1rXiesMTMw",
  "UC2hx0xVkMoHGWijwr_lA01w",
  "UCDRWSO281bIHYVi-OV3iFYA",
  "UCWsfcksUUpoEvhia0_ut0bA",
  "",
  "UCHP4f7G2dWD4qib7BMatGAw",
  "UC060r4zABV18vcahAWR1n7w",
  "UC7gxU6NXjKF1LrgOddPzgTw",
  "UCMqGG8BRAiI1lJfKOpETM_w",
]

const isForbiddenChannel = (channelId: string) => forbiddenChannels.includes(channelId)

export const isCorrectLiveHoloUrl = (holoDatas: any) => {
  const { channel, status, start_scheduled } = holoDatas
  return (
    channel.org === "Hololive" &&
    status === "live" &&
    !isForbiddenChannel(channel.id) &&
    Date.now() - 60 * 60 * 24 * 1000 * 1 < new Date(start_scheduled).getTime()
  )
}

export const isCorrectScheduleHoloUrl = (holoDatas: any) => {
  const { channel, status } = holoDatas
  return channel.org === "Hololive" && status === "upcoming" && !isForbiddenChannel(channel.id)
}
