import { useEffect } from "react";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Header } from "../../components/Header";
import { RouterLink } from "../../components/RouterLink";
import { MainTemplate } from "../../templates/MainTemplate";

export function AboutPomodoro() {
  useEffect(() => {
    document.title = "About the Pomodoro Technique - Pomodorus";
  }, []);

  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Header>The Pomodoro Technique 🍅</Header>

          <p>
            The Pomodoro Technique is a productivity method created by{" "}
            <strong>Francesco Cirillo</strong>. It consists of dividing work
            into time blocks (the famous "Pomodoros") separated by breaks. The
            goal is to maintain total focus for a short period while ensuring
            proper rest to avoid mental fatigue.
          </p>

          <img src="https://placehold.co/1920x1080" alt="" />

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Choose a task</strong> you want to accomplish.
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short 5-minute break</strong>.
            </li>
            <li>
              <strong>4. After 4 cycles, take a long break</strong> (usually 15
              to 30 minutes).
            </li>
          </ul>

          <h2>
            But <strong>Pomodorus</strong> has something extra 🚀
          </h2>

          <p>
            Our app follows the original concept, but with some improvements and
            customizations to make the process even more efficient:
          </p>

          <h3>⚙️ Time customization</h3>
          <p>
            You can configure the focus time, short break, and long break
            however you like! Just go to the{" "}
            <RouterLink href="/settings">settings page</RouterLink> and adjust
            the minutes as you prefer.
          </p>

          <h3>🔁 Cycles organized in sequence</h3>
          <p>
            After each completed cycle, a new task is automatically added to
            your history, and the app suggests the next cycle (focus or break).
          </p>

          <p>
            <strong>Our default pattern:</strong>
          </p>
          <ul>
            <li>
              <strong>Odd</strong> cycles: Work (focus).
            </li>
            <li>
              <strong>Even</strong> cycles: Short break.
            </li>
            <li>
              Cycle <strong>8</strong>: Special long break to reset the full
              cycle.
            </li>
          </ul>

          <h3>🍅 Cycle visualization</h3>
          <p>
            Right below the timer, you'll see colored dots representing the
            cycles:
          </p>
          <ul>
            <li>🟡 Yellow: Work (focus) cycle.</li>
            <li>🟢 Green: Short break.</li>
            <li>🔵 Blue: Long break (appears every 8 cycles).</li>
          </ul>

          <p>
            This way, you always know where you are in the process and what
            comes next. No more writing things down on paper or doing mental
            calculations!
          </p>

          <h3>📊 Automatic history</h3>
          <p>
            All your tasks and completed cycles are saved in your{" "}
            <RouterLink href="/history">history</RouterLink>, marked as
            completed or interrupted. This allows you to track your progress
            over time.
          </p>

          <h2>Why use Pomodorus?</h2>
          <ul>
            <li>✅ Organize your focus clearly.</li>
            <li>✅ Work and rest in the right balance.</li>
            <li>✅ Customize your own cycles and durations.</li>
            <li>✅ Track your history automatically.</li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let’s go{" "}
            <RouterLink href="/">back to the homepage</RouterLink> and start
            your Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Full focus, no rush, no distractions — just go!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
