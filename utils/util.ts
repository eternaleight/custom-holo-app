export const isCorrectLiveHoloUrl = (holoDatas: any) => {
  return (
    holoDatas.channel.org === "Hololive" &&
    holoDatas.status === "live" &&
    holoDatas.channel.id !== "UCKeAhJvy8zgXWbh9duVjIaQ" &&
    holoDatas.channel.id !== "UCZgOv3YDEs-ZnZWDYVwJdmA" &&
    holoDatas.channel.id !== "UC9mf_ZVpouoILRY9NUIaK-w" &&
    holoDatas.channel.id !== "UCNVEsYbiZjH5QLmGeSgTSzg" &&
    holoDatas.channel.id !== "UCGNI4MENvnsymYjKiZwv9eg" &&
    holoDatas.channel.id !== "UCANDOlYTJT7N5jlRC3zfzVA" &&
    holoDatas.channel.id !== "UChSvpZYRPh0FvG4SJGSga3g" &&
    holoDatas.channel.id !== "UCwL7dgTxKo8Y4RFIKWaf8gA" &&
    holoDatas.channel.id !== "UC6t3-_N8A6ME1JShZHHqOMw" &&
    holoDatas.channel.id !== "" &&
    holoDatas.channel.id !== "UCc88OV45ICgHbn3ZqLLb52w" &&
    holoDatas.channel.id !== "UCgRqGV1gBf2Esxh0Tz1vxzw" &&
    holoDatas.channel.id !== "UCkT1u65YS49ca_LsFwcTakw" &&
    holoDatas.channel.id !== "UCdfMHxjcCc2HSd9qFvfJgjg" &&
    holoDatas.channel.id !== "" &&
    holoDatas.channel.id !== "UCyxtGMdWlURZ30WSnEjDOQw" &&
    holoDatas.channel.id !== "UC7MMNHR-kf9EN1rXiesMTMw" &&
    holoDatas.channel.id !== "UC2hx0xVkMoHGWijwr_lA01w" &&
    holoDatas.channel.id !== "UCDRWSO281bIHYVi-OV3iFYA" &&
    holoDatas.channel.id !== "UCWsfcksUUpoEvhia0_ut0bA" &&
    holoDatas.channel.id !== "" &&
    holoDatas.channel.id !== "UCHP4f7G2dWD4qib7BMatGAw" &&
    holoDatas.channel.id !== "UC060r4zABV18vcahAWR1n7w" &&
    holoDatas.channel.id !== "UC7gxU6NXjKF1LrgOddPzgTw" &&
    holoDatas.channel.id !== "UCMqGG8BRAiI1lJfKOpETM_w" &&
    Date.now() - 60 * 60 * 24 * 1000 * 1 < new Date(holoDatas.start_scheduled).getTime()
  )
}

export const isCorrectScheduleHoloUrl = (holoDatas: any) => {
  return (
    holoDatas.channel.org === "Hololive" &&
    holoDatas.status === "upcoming" &&
    holoDatas.channel.id !== "UCKeAhJvy8zgXWbh9duVjIaQ" &&
    holoDatas.channel.id !== "UCZgOv3YDEs-ZnZWDYVwJdmA" &&
    holoDatas.channel.id !== "UC9mf_ZVpouoILRY9NUIaK-w" &&
    holoDatas.channel.id !== "UCNVEsYbiZjH5QLmGeSgTSzg" &&
    holoDatas.channel.id !== "UCGNI4MENvnsymYjKiZwv9eg" &&
    holoDatas.channel.id !== "UCANDOlYTJT7N5jlRC3zfzVA" &&
    holoDatas.channel.id !== "UChSvpZYRPh0FvG4SJGSga3g" &&
    holoDatas.channel.id !== "UCwL7dgTxKo8Y4RFIKWaf8gA" &&
    holoDatas.channel.id !== "UC6t3-_N8A6ME1JShZHHqOMw" &&
    holoDatas.channel.id !== "" &&
    holoDatas.channel.id !== "UCc88OV45ICgHbn3ZqLLb52w" &&
    holoDatas.channel.id !== "UCgRqGV1gBf2Esxh0Tz1vxzw" &&
    holoDatas.channel.id !== "UCkT1u65YS49ca_LsFwcTakw" &&
    holoDatas.channel.id !== "UCdfMHxjcCc2HSd9qFvfJgjg" &&
    holoDatas.channel.id !== "" &&
    holoDatas.channel.id !== "UCyxtGMdWlURZ30WSnEjDOQw" &&
    holoDatas.channel.id !== "UC7MMNHR-kf9EN1rXiesMTMw" &&
    holoDatas.channel.id !== "UC2hx0xVkMoHGWijwr_lA01w" &&
    holoDatas.channel.id !== "UCDRWSO281bIHYVi-OV3iFYA" &&
    holoDatas.channel.id !== "UCWsfcksUUpoEvhia0_ut0bA" &&
    holoDatas.channel.id !== "" &&
    holoDatas.channel.id !== "UCHP4f7G2dWD4qib7BMatGAw" &&
    holoDatas.channel.id !== "UC060r4zABV18vcahAWR1n7w" &&
    holoDatas.channel.id !== "UC7gxU6NXjKF1LrgOddPzgTw" &&
    holoDatas.channel.id !== "UCMqGG8BRAiI1lJfKOpETM_w" &&
    Date.now() - 60 * 60 * 24 * 1000 * 1 < new Date(holoDatas.start_scheduled).getTime()
  )
}
