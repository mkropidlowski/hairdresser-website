import "./styles/globals.scss";

export const metadata = {
    title: "Portfolio",
    description: "Portfolio template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl">
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
