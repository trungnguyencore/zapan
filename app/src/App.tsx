import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from './app/AppShell'
import { AppServicesProvider } from './app/AppServices'
import { AccountPage } from './features/account/AccountPage'
import { HomePage } from './features/home/HomePage'
import { LearnPage } from './features/learn/LearnPage'
import { LibraryPage } from './features/library/LibraryPage'
import { ProgressPage } from './features/progress/ProgressPage'
import { CustomPracticePage } from './features/practice/CustomPracticePage'
import { ReviewPage } from './features/review/ReviewPage'
import { SessionPage } from './features/session/SessionPage'
import './App.css'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="library" element={<LibraryPage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="practice/custom" element={<CustomPracticePage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="session/:sessionKind/:topicId?" element={<SessionPage />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return <BrowserRouter><AppServicesProvider><AppRoutes /></AppServicesProvider></BrowserRouter>
}
