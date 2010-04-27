pushd src
java -cp ../../rhino/build/classes org.mozilla.javascript.tools.shell.Main Demo.js $@ 
popd