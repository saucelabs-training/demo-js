describe("Simple native app example", () => {
  it("should run ADB command", async () => {
    const output = driver.executeScript("mobile: shell", [
      {
        command: "appium:adbExecTimeout",
      },
    ]);
  });
});
