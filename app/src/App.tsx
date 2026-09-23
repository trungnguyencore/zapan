import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from './app/AppShell'
import { HomePage } from './features/home/HomePage'
import { LearnPage } from './features/learn/LearnPage'
import { LibraryPage } from './features/library/LibraryPage'
import { ProgressPage } from './features/progress/ProgressPage'
import { ReviewPage } from './features/review/ReviewPage'
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
      </Route>
    </Routes>
  )
}

export default function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}
