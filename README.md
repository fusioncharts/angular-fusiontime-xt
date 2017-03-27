<a href="https://fusioncharts.github.io/angular-fusiontime-xt/examples/#/">Demos and Documentation</a> <br><hr>
<h2>QuickStart</h2>
						<h3>Step 1: Include angular.fusiontime.js</h3>
						<p>In your HTML, include <code>angular.fusiontime.js</code> after all other scripts:</p>
						<pre><code>&lt;script type="text/javascript" src="/path/to/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="/path/to/angular.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="/path/to/angular-fusioncharts.js"&gt;&lt;/script&gt;</code></pre>
						<h3>Step 2: Include <code>ng-fusiontime</code> in your module</h3>
						<p>In the app, include <code>ng-fusiontime</code> as a dependency. If you looking for where to add the dependency, look for the call to <code>angular.module</code> in your code.</p>
						<pre><code>angular.module("myApp", ["ng-fusiontime"])</code></pre>
						<h3>Step 3: Add the <code>fusiontime</code> directive</h3>
						<p>In your HTML, find the section where you wish to add the chart and add a <code>&lt;div&gt;</code> with the <code>fusiontime</code> directive. We are assuming it's inside a controller called <code>MyController</code> which would change based on your
							usage.
						</p>
						<pre><code>&lt;fusiontime width="800" height="400" dataSource="{{fcDataSource}}"&gt;&lt;/fusiontime&gt;</code></pre>
						<p>Now this is bound to a datasource with the <code>fcDataSource</code> scope object.</p>
						<h3>Step 4: Populate required variables in controller</h3>
						<p>In the previous code, we are binding to a scope variable <code>fcDataSource</code>, but that hasn't been defined yet.</p>
						<p>In your controller, set the DataSource as you would for a regular FusionCharts JSON Format DataSource</p>
<pre><code>app.controller('MyController', function ($scope) {
    $scope.fcDataSource = {
    };
});</code></pre>
						<p>And your chart should display when you load the page. </p>
						<h3>Licensing</h3>
						<p>Angular FusionTime is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can <a href="http://fusioncharts.com/download/">Download an evaluation</a>.
							You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is <a href="http://www.fusioncharts.com/download/free/">free for non-commercial and personal use</a>) .</p>
