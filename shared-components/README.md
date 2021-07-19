# Shared-components

Wrap your app with you preferred brand. The css needs to be imported manually once in the app.

```
import { Strim, PrimaryButton, DisplayTitle } from '@rikstv/shared-components";
import '@rikstv/shared-components/dist/core/Strim.css";
import '@rikstv/shared-components/dist/button/Button.css";
import '@rikstv/shared-components/dist/typography/Typography.css";

const Root = () => (
    <Strim>
        <main>
            <DisplayTitle>
                MyApp
            </DisplayTitle>

            <PrimaryButton>
                Hello world
            </PrimaryButton>
        </main>
    </Strim>
)
```
