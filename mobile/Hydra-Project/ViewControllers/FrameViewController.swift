//
//  FrameViewController.swift
//  Hydra-Project
//
//  Created by Денис Хафизов on 01.03.2024.
//

import UIKit

final class FrameViewController: UIViewController {
    
    
    private let userLabel = UILabel(text: "Клиент:")
    private let userNameLabel = UILabel(text: "Иванов Иван Иванович")
    private let addressLabel = UILabel(text: "г.Ульяновск, ул.Тестовая, д. 35-45")
    private let phoneLabel = UILabel(text: "тел. 8-900-000-00-00")
    
    
    private let initialDataLabel: UILabel = {
        let label = UILabel()
        label.text = "Исходные данные"
        label.font = .boldSystemFont(ofSize: 16)
        return label
    }()
    private let firstFloorLabel: UILabel = {
        let label = UILabel()
        label.text = "1 этаж"
        label.font = .boldSystemFont(ofSize: 16)
        return label
    }()
    private let coverWallLabel: UILabel = {
        let label = UILabel()
        label.text = "Обшивки внешних стен"
        label.font = .boldSystemFont(ofSize: 16)
        return label
    }()
    
    private let userInfoStackView = UIStackView()
    private let initialDataStackView = UIStackView()
    private let firstFloorStackView = UIStackView()
    private let coverWallStackView = UIStackView()
    private let addressStackView = UIStackView()
    
    private let usersTableView = UITableView()
    
    private var addCalculationButton = UIBarButtonItem()
    private var signOutButton = UIBarButtonItem()
    private let saveAddressButton = UIButton(title: "Сохранить", titleColor: .white, backgroundColor: .mainDark())
    
    private let scrollView = UIScrollView()
    private let label = UILabel()
    
    private let addressTF = AuthTextFieldForm(placeholderText: "Добавить адрес объекта", isActive: true)
    
    private let numbersOfFloorsLabel = UILabel(text: "Количество этажей")
    private let numbersOfFloorsTF = AuthTextFieldForm(isActive: true)
    
    private let heightOfFloorsLabel = UILabel(text: "Высота этажа")
    private let heightOfFloorsTF = AuthTextFieldForm(isActive: true)
    
    private let perimeterOfFloorsLabel = UILabel(text: "Периметр внешних стен")
    private let perimeterOfFloorsTF = AuthTextFieldForm(isActive: true)
    
    private let areaOfBaseLabel = UILabel(text: "Площадь основания")
    private let areaOfBaseTF = AuthTextFieldForm(isActive: true)
    
    private let thicknessOfOuterWallsLabel = UILabel(text: "Толщина внешних стен")
    private let thicknessOfOuterWallsTF = AuthTextFieldForm(isActive: true)
    
    private let lengthOfInnerWallsLabel = UILabel(text: "Длина внутренних стен")
    private let lengthOfInnerWallsTF = AuthTextFieldForm(isActive: true)
    
    private let thicknessOfInnerWallsLabel = UILabel(text: "Толщина внутренних стен")
    private let thicknessOfInnerWallsTF = AuthTextFieldForm(isActive: true)
    
    private let exteriorWallCladdingLabel: UILabel = {
        let label = UILabel()
        label.text = "Обшивка внешних стен"
        label.font = .boldSystemFont(ofSize: 16)
        return label
    }()
    
    private let initialDataLabelsStackView = UIStackView()
    private let initialDataTFStackView = UIStackView()

    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupView()
        addSubview()
        setupLayout()
        setupScrollView()
    }
    
    @objc
    private func signOutButtonPressend() {
        dismiss(animated: true)
    }

}

//MARK: Setting view
private extension FrameViewController {
    func setupView() {
        view.backgroundColor = .white
        
        title = "Каркас:"
        
        signOutButton = UIBarButtonItem(title: "Назад", style: .plain, target: self, action: #selector(signOutButtonPressend))
        navigationItem.leftBarButtonItem = signOutButton
    }
    
    func setupScrollView() {
        scrollView.showsVerticalScrollIndicator = true
        scrollView.alwaysBounceVertical = true
        scrollView.backgroundColor = .white
    }
}

//MARK: Setting
private extension FrameViewController {
    func addSubview() {
        [
            scrollView
        ].forEach {
            view.addSubview($0)
        }
                
        scrollView.addSubview(userInfoStackView)
        scrollView.addSubview(addressStackView)
        scrollView.addSubview(initialDataLabel)
        scrollView.addSubview(initialDataStackView)
        scrollView.addSubview(exteriorWallCladdingLabel)
        
        userInfoStackView.addArrangedSubview(userLabel)
        userInfoStackView.addArrangedSubview(userNameLabel)
        userInfoStackView.addArrangedSubview(addressLabel)
        userInfoStackView.addArrangedSubview(phoneLabel)
        userInfoStackView.axis = .vertical
        userInfoStackView.spacing = 5
        userInfoStackView.distribution = .fill
        
        addressStackView.addArrangedSubview(addressTF)
        addressStackView.addArrangedSubview(saveAddressButton)
        addressStackView.axis = .horizontal
        addressStackView.spacing = 10
        addressStackView.distribution = .fill
        
        [
            numbersOfFloorsLabel,
            heightOfFloorsLabel,
            perimeterOfFloorsLabel,
            areaOfBaseLabel,
            thicknessOfOuterWallsLabel,
            lengthOfInnerWallsLabel,
            thicknessOfInnerWallsLabel
        ].forEach {
            initialDataLabelsStackView.addArrangedSubview($0)
        }
        initialDataLabelsStackView.distribution = .fillEqually
        initialDataLabelsStackView.axis = .vertical
        initialDataLabelsStackView.spacing = 10
        
        [
            numbersOfFloorsTF,
            heightOfFloorsTF,
            perimeterOfFloorsTF,
            areaOfBaseTF,
            thicknessOfOuterWallsTF,
            lengthOfInnerWallsTF,
            thicknessOfInnerWallsTF
        ].forEach {
            initialDataTFStackView.addArrangedSubview($0)
        }
        initialDataTFStackView.distribution = .fillEqually
        initialDataTFStackView.axis = .vertical
        initialDataTFStackView.spacing = 10
    
        initialDataStackView.addArrangedSubview(initialDataLabelsStackView)
        initialDataStackView.addArrangedSubview(initialDataTFStackView)
        initialDataStackView.axis = .horizontal
        initialDataStackView.spacing = 10
        initialDataStackView.distribution = .fill
    }
}

//MARK: Layout
private extension FrameViewController {
    func setupLayout() {
            [
                scrollView,
                userInfoStackView,
                addressStackView,
                initialDataStackView,
                initialDataLabelsStackView,
                initialDataTFStackView,
                initialDataLabel,
                numbersOfFloorsLabel,
                heightOfFloorsLabel,
                perimeterOfFloorsLabel,
                numbersOfFloorsTF,
                heightOfFloorsTF,
                perimeterOfFloorsTF,
                exteriorWallCladdingLabel
            ].forEach {
                $0.translatesAutoresizingMaskIntoConstraints = false
            }
        
        NSLayoutConstraint.activate([
            scrollView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            scrollView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            scrollView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            scrollView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor),
    
            userInfoStackView.topAnchor.constraint(equalTo: scrollView.topAnchor),
            userInfoStackView.leadingAnchor.constraint(equalTo: scrollView.leadingAnchor, constant: 16),
            userInfoStackView.trailingAnchor.constraint(equalTo: scrollView.trailingAnchor, constant: -16),
            
            addressStackView.topAnchor.constraint(equalTo: userInfoStackView.bottomAnchor, constant: 20),
            addressStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            addressStackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
            
            initialDataLabel.topAnchor.constraint(equalTo: addressStackView.bottomAnchor, constant: 16),
            initialDataLabel.leadingAnchor.constraint(equalTo: addressStackView.leadingAnchor),
            initialDataLabel.trailingAnchor.constraint(equalTo: addressStackView.trailingAnchor),
            
            initialDataStackView.topAnchor.constraint(equalTo: initialDataLabel.bottomAnchor, constant: 10),
            initialDataStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            initialDataStackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
            
            exteriorWallCladdingLabel.topAnchor.constraint(equalTo: initialDataStackView.bottomAnchor, constant: 20),
            exteriorWallCladdingLabel.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            exteriorWallCladdingLabel.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16)
        ])
    }
}
