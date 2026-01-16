import Dashboard from "@/components/userPanelTemplates/Dashboard"

function UserPanelLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-4 w-full mt-8">
            <div className="w-1/5">
                <Dashboard />
            </div>

            <div className="w-4/5">
                {children}
            </div>
        </div>
    )
}

export default UserPanelLayout
