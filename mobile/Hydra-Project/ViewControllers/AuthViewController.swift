//
//  AuthViewController.swift
//  Hydra-Project
//
//  Created by Денис Хафизов on 25.02.2024.
//

import UIKit

final class AuthViewController: UIViewController {
    
    private let authLabel = UILabel(text: "Авторизация", labelFont: .mainFont26())
    private let loginLabel = UILabel(text: "Логин:")
    private let passwordLabel = UILabel(text: "Пароль:")
    private let regAccountLabel = UILabel(text: "Еще не зарегистрированны?")
    
    private let emailTF = AuthTextFieldForm(isActive: true)
    private let passwordTF = AuthTextFieldForm(isActive: true)
    
    private let emailStackView = UIStackView()
    private let passwordStackView = UIStackView()
    private let mainStackView = UIStackView()
    private let signUpStackView = UIStackView()
    
    private let authButton = UIButton(title: "Войти", titleColor: .white, backgroundColor: .darkGray)
    private let signUpButton: UIButton = {
        let button = UIButton(type: .system)
        button.setTitle("Регистрация", for: .normal)
        button.setTitleColor(.mainRed(), for: .normal)
        button.titleLabel?.font = .mainFont20()
        return button
    }()
    
//    private let mainTabBar = MainTabBarController()
    private let registrationVC = UINavigationController(rootViewController: RegistrationViewController())
//    private let adminVC = AdminViewController()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupView()
        addSubViews()
        setupLayout()
        isUserLogin()
        
        authButton.addTarget(self, action: #selector(authButtonPressed), for: .touchUpInside)
        signUpButton.addTarget(self, action: #selector(signUpButtonPressed), for: .touchUpInside)
    }
    
    private func isUserLogin() {

    }
    
    @objc
    private func authButtonPressed() {
        let usersVC = UINavigationController(rootViewController: UsersViewController())
        usersVC.modalPresentationStyle = .fullScreen
        present(usersVC, animated: true)
    }
    
    @objc
    private func signUpButtonPressed() {
        registrationVC.modalPresentationStyle = .fullScreen
        present(registrationVC, animated: true)
    }
    
    private func showAlert(title: String, message: String) {
        let alert = UIAlertController(
            title: title,
            message: message,
            preferredStyle: .alert
        )
        
        let okButton = UIAlertAction(title: "OK", style: .default)
        alert.addAction(okButton)
        
        present(alert, animated: true)
    }
}

// MARK: Settings View
private extension AuthViewController {
    func setupView() {
        view.backgroundColor = .white
        
        title = "Hydra"
        
        navigationController?.navigationBar.prefersLargeTitles = true
    }
}

// MARK: Setting
private extension AuthViewController {
    func addSubViews() {
        [
            authLabel,
            signUpStackView,
            mainStackView
        ].forEach {
            view.addSubview($0)
        }
        
        emailStackView.addArrangedSubview(loginLabel)
        emailStackView.addArrangedSubview(emailTF)
        emailStackView.spacing = 0
        emailStackView.axis = .vertical
        emailStackView.distribution = .fill
        
        passwordStackView.addArrangedSubview(passwordLabel)
        passwordStackView.addArrangedSubview(passwordTF)
        passwordStackView.spacing = 0
        passwordStackView.axis = .vertical
        passwordStackView.distribution = .fill
        
        mainStackView.addArrangedSubview(emailStackView)
        mainStackView.addArrangedSubview(passwordStackView)
        mainStackView.addArrangedSubview(authButton)
        mainStackView.spacing = 40
        mainStackView.axis = .vertical
        mainStackView.distribution = .fill
        
        signUpStackView.addArrangedSubview(regAccountLabel)
        signUpStackView.addArrangedSubview(signUpButton)
        signUpStackView.spacing = 0
        signUpStackView.axis = .vertical
        signUpStackView.distribution = .fill
    }
}

// MARK: Layout
private extension AuthViewController {
    func setupLayout() {
        [
            authLabel,
            authButton,
            signUpButton,
            loginLabel,
            passwordLabel,
            regAccountLabel,
            emailTF,
            passwordTF,
            emailStackView,
            passwordStackView,
            signUpStackView,
            mainStackView
        ].forEach {
            $0.translatesAutoresizingMaskIntoConstraints = false
        }
        
        NSLayoutConstraint.activate([
            authLabel.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            authLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            
            mainStackView.topAnchor.constraint(equalTo: authLabel.bottomAnchor, constant: 120),
            mainStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 40),
            mainStackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -40),
            
            signUpStackView.topAnchor.constraint(equalTo: mainStackView.bottomAnchor, constant: 80),
            signUpStackView.centerXAnchor.constraint(equalTo: view.centerXAnchor)
        ])
    }
}

