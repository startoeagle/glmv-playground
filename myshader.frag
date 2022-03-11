#version 100

#ifdef GL_ES
precision mediump float;
#endif
varying vec2 v_texcoord;

uniform sampler2D tex;
uniform float time;
uniform float width;
uniform float height;

void main () {
      gl_FragColor = texture2D( tex, v_texcoord );
      float scale = time - floor(time);
      vec4 overlay = mix(vec4(0.4, 0.2, 0.0, 1.0), vec4(0.3, 0.2, 0.5, 1.0), scale );
      gl_FragColor = mix(gl_FragColor, overlay, 0.5);
}
