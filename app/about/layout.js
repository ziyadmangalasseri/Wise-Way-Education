export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body
          className=""
        >
            <p>this is about layout</p>
          {children}
          <p>this is about layout</p>

        </body>
      </html>
    );
  }