package ir.m4tinbeigi.fontwow;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import androidx.core.splashscreen.SplashScreen;

public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.installSplashScreen(this);
        // Must run before super.onCreate(), which builds the bridge with the registered plugins.
        registerPlugin(FontWowNativePlugin.class);
        super.onCreate(savedInstanceState);
    }
}
